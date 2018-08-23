/* global controller */

import Chart from 'chart.js';

const canvas = document.createElement('canvas');
controller.element.appendChild(canvas);

const chart = new Chart(canvas, {
    type: 'radar',
    data: getChartData([]),
    options: {
        maintainAspectRatio: false
    }
});

controller.createAxisLabel({
    picks: 'Group By',
    orientation: 'horizontal',
    position: 'bottom',
    popoverTitle: 'Group'
});

controller.createAxisLabel({
    picks: 'Metric',
    orientation: 'horizontal',
    position: 'bottom'
});

controller.update = data => {
    chart.data = getChartData(data);
    chart.update();
};

function getChartData(data) {
    const groupAccessor = controller.dataAccessors['Group By'];
    const metricAccessor = controller.dataAccessors['Metric'];

    return {
        labels: data.map(item => groupAccessor.raw(item)),
        datasets: [{
            data: data.map(item => metricAccessor.raw(item)),
            label: groupAccessor.getLabel(),
            backgroundColor: 'rgba(110, 174, 79, 0.7)',
            borderColor: 'rgb(110, 174, 79)'
        }]
    };
}
