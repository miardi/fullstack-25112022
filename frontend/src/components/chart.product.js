import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import axios from "axios";
import collect from "collect.js";
import ColorHash from "color-hash";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const ChartProduct = () => {
  const [name, setName] = useState([]);
  const [price, setPrice] = useState([]);
  const [name_t, setName_t] = useState([]);
  const [price_t, setPrice_t] = useState([]);

    const getChartProduct = async () => {
        await axios.get('http://localhost:5001/products')
        .then ((response) => {
            if(response.statusText != "OK"){
                console.log(">> Error while getting product");
            };

            // Cara manual memilah nama dan price
            // let tName = [];
            // let tPrice = [];
            
            // for(let i=0;i<response.data.length;i++){
            //     tName[i]=response.data[i].name;
            //     tPrice[i]=response.data[i].price;
            // }

            // setName(tName);
            // setPrice(tPrice);
            
            // menggunakan collect.js memilah nama dan price
            const nameCollect = collect(response.data).map(item => item.name).all();
            setName(nameCollect);
            const priceCollect = collect(response.data).map(item => item.price).all();
            setPrice(priceCollect);

            if(name != name_t || price != price_t){
                setName_t(name);
                setPrice_t(price);
            }

            return response;
        })
    };

    useEffect(() => {
        getChartProduct();
    },[name_t, price_t]);

  // Properties dari bar
  const options = {
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: "Product Price Comparation",
            weight: "bolt",
            color: "#blue",
            align: "center",
            font: {size: 26},
        },
        datalabels: {
            display: true,
            color: "black",
            align: "center",
            labels:{
                title: {font :{weight: "bolt"}},
                value: {color : "white"}
            },
            formatter: function (value){
                return value;
            },
        },
    },
  };

  const colorHash = (str) => {
    var hash = 0;
    for(var i = 0; i < str.length; i++) {
        hash += str.charCodeAt(i);
    }
    return hash;
  }

  return (
    <div className="container mt-3">
      <h3>Chart of Product</h3>
      {/* chart product ada disini */}
      <Bar options={options}
      data = {{
        labels: name, //["a", "b", "c", "d", "e"],
        datasets: [
            {
                label: "product Price",
                data: price, //[100,50,90,40,32]
                backgroundColor: "rgba(53, 162, 235, 0.5)"
            }
        ]
      }}
      />
    </div>
  );
};

export default ChartProduct;
