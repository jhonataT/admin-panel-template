import { useState } from "react";
import { DashboardScreen } from "../../screen/DashboardScreen";
import barData from '../../core/mocks/MOCK_BAR_CHART.json';
import pieData from '../../core/mocks/MOCK_PIE_CHART.json';
import scatterData from '../../core/mocks/MOCK_SCATTER.json';
import lineData from '../../core/mocks/MOCK_LINE.json';

const chartOptions = [
    {
        type: "bar",
        title: "Quantidade de produtos por país",
        icon: "AiOutlineBarChart",
        data: barData
    },
    {
        type: "pie",
        title: "Quantidade de produtos por país",
        icon: "AiFillPieChart",
        data: pieData
    },
    {
        type: "line",
        title: "Quantidade de produtos por país",
        icon: "AiOutlineLineChart",
        data: lineData
    },
    {
        type: "scatter",
        title: "Quantidade de produtos por país",
        icon: "AiOutlineDotChart",
        data: scatterData
    }
]

export const DashboardContainer = () => {
    const [currentChart, setCurrentChart] = useState({
        type: "bar",
        title: "Quantidade de produtos por país",
        icon: "AiOutlineBarChart",
        data: barData
    });

    const toggleChart = (data) => setCurrentChart(data);


    return <DashboardScreen {...{currentChart, chartOptions, toggleChart}}/>
}