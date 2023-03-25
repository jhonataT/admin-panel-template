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
      label: 'Número de usuários',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};