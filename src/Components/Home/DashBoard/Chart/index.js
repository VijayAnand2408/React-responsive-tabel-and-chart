import React, { useState, useEffect } from 'react'
import { Line } from "react-chartjs-2";
import { useSelector, useDispatch } from 'react-redux'
import Chart from 'chart.js/auto';


function RevenueChart() {
    const { filterData } = useSelector(state => state.revenue);
    const [postingPeriod, setPostingPeriod] = useState([])
    const [datasets, setDatasets] = useState([])
    const [productName, setProductName] = useState([])
    const arr = []
    var colors= ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 
    'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 
    'silver', 'teal', 'white', 'yellow'];

    useEffect(() => {
        const uniqueMonthArray = filterData.length > 0 && filterData?.reduce(function (a, d) {
            if (a.indexOf(d.month) === -1) {
                a.push(d.month);
            }
            return a;
        }, []);

        setPostingPeriod(uniqueMonthArray)
        const uniqueProductArray = filterData.length > 0 && filterData?.reduce(function (a, d) {
            if (a.indexOf(d.product) === -1) {
                a.push(d.product);
            }
            return a;
        }, []);

        setProductName(uniqueProductArray)
        uniqueProductArray.length > 0 && uniqueProductArray.map((g) => {
            let productName;
            var acvData = filterData.length > 0 && filterData?.reduce(function (a, d) {
                if (g === d.product) {
                    productName = d.product
                    a.push(d.acv);
                }
                return a;
            }, []);
            arr.push ({ label: productName,data:acvData})
        })
        
        const finalDataSetArr = [];
        arr.length > 0 && arr.map((data)=>{
            finalDataSetArr.push({
                label: data.label,
                data: data.data,
                fill: true,
                backgroundColor: colors.splice(Math.floor(Math.random()*colors.length), 1)[0],
                borderColor: "rgba(75,192,192,1)"
            })
        })
        
        setDatasets(finalDataSetArr)

    }, [filterData])


    const data = {
        labels: postingPeriod,
        datasets,
    };

    return (
        <div>
            <Line data={data} />
        </div>
    )
}

export default RevenueChart