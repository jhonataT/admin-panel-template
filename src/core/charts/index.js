import { faker } from '@faker-js/faker';

const labels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'];

export const mock_bar_data = {
  labels,
  datasets: [
    {
      label: 'Suporte mobile',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: '#26c6da',
    },
    {
      label: 'Suporte web',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: '#18808d',
    },
  ],
};

export const bar_options = {
  responsive: false,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Solicitação do suporte',
    },
  },
};

export const area_options = {
  responsive: false,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Usuários ativos no app',
    },
  },
};

export const area_data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Usuários',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export const donut_options = {
  responsive: false,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Tipos de usuários',
    },
  },
}

export const donut_data = {
  labels: ['Admin', 'Usuário Pro', 'Usuário normal'],
  datasets: [
    {
      data: [25, 204, 974],
      backgroundColor: [
        'rgba(255, 64, 105, .7)',
        'rgba(54, 162, 235, 0.7)',
        'rgb(146, 191, 231, .7)',
      ],
      borderColor: [
        'rgba(255, 64, 105, 1)',
        'rgba(54, 162, 235, 1)',
        'rgb(146, 191, 231, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export const pie_options = {
  responsive: false,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Aplicações e usuários',
    },
  },
}

export const pie_data = {
  labels: ['Plataforma X', 'Aplicativo Y', 'Sistema Z'],
  datasets: [
    {
      data: [25, 204, 974],
      backgroundColor: [
        'rgba(231, 158, 198, 0.7)',
        'rgba(254, 213, 95, .7)',
        'rgb(33, 170, 140, .7)',
      ],
      borderColor: [
        'rgba(231, 158, 198, 1)',
        'rgba(254, 213, 95, 1)',
        'rgb(33, 170, 140, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export const multi_bar_data = {
  labels,
  datasets: [
    {
      label: 'Equipe 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgb(255, 99, 132)',
      stack: 'Stack 1',
    },
    {
      label: 'Equipe 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgb(53, 162, 235)',
      stack: 'Stack 1',
    },
  ],
};

export const multi_bar_options = {
  plugins: {
    title: {
      display: true,
      text: 'Engajamento da equipe',
    },
    legend: {
      position: 'bottom',
    },
  },
  responsive: false,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

export const radar_options = {
  plugins: {
    title: {
      display: true,
      text: 'Média de atualizações',
    },
    legend: {
      position: 'bottom',
    },
  },
}

export const radar_data = {
  labels: ['Plataforma X', 'Aplicativo Y', 'Sistema Z'],
  datasets: [
    {
      label: 'Atualizações diárias',
      data: [24, 21, 15],
      backgroundColor: 'rgba(255, 210, 204, 0.7)',
      borderColor: 'rgba(255, 0, 0, 1)',
      borderWidth: 1,
    },
    {
      label: 'Atualizações mensais',
      data: [112, 100, 123],
      backgroundColor: 'rgba(249, 128, 18, 0.2)',
      borderColor: 'rgba(249, 128, 18, 1)',
      borderWidth: 1,
    },
  ],
};
