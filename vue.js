const { createApp, ref } = Vue


createApp({
    setup() {
      const message = ref('Hello vue!')
      const images = [
        {
            id: "1",
            path: "docs/assets/banner_v9.png",
            description2: "Banner do Canal do Youtube",
            description: "Versão 9"

        },
        {
            id: "2",                    
            description: "Banner estilizado para Twitch",
            description2: "Banner Games Twitch",                    
            path: "docs/assets/games.png",
        },
        {
            id: "3",
            description: "Metallica Days Banner ",
            description2: "Banner estilizado para o Projeto Metallica Days",
            path: "docs/assets/metallica_days.png"
        },
        {
            id: "4",
            description: "Megadeth Saga Banner #1",
            description2: "Banner estilizado para o Projeto Megadeth Saga #1",
            path: "docs/assets/mega_saga_v1.png"
        },
        {
            id: "5",
            description: "Megadeth Saga Banner #2",
            description2: "Banner estilizado para o Projeto Megadeth Saga #2",
            path: "docs/assets/mega_saga_v2.png"
        },
        {
            id: "6",
            description: "Megadeth Saga Banner #3",
            description2: "Banner estilizado para o Projeto Megadeth Saga #3",
            path: "docs/assets/mega_saga_v3.png"
        },
        {
            id: "7",
            description: "Megadeth Saga Banner #4",
            description2: "Banner estilizado para o Projeto Megadeth Saga #4",
            path: "docs/assets/mega_saga_v4.png"
        },
        {
            id: "8",
            description: "Megadeth Saga Banner #5",
            description2: "Banner estilizado para o Projeto Megadeth Saga #5",
            path: "docs/assets/mega_saga_v5.png"
        },
        {
            id: "9",
            description: "Banner Fofinho",
            description2: "Terceira Versão",
            path: "docs/assets/fofinho_v3.png"
        },
        {
            id: "10",
            description: "Banner Zueira Welcome Facebook",
            description2: "Terceira Versão",
            path: "docs/assets/zuera_welcome_v3.png"
        },
        {
            id: "11",
            description: "Banner Samsungo Store",
            description2: "Primeira Versão",
            path: "docs/assets/only_fezes_v2.png"
        },
        {
            id: "12",
            description: "Banner Samsungo Store",
            description2: "Primeira Versão",
            path: "docs/assets/samsungo_v2.png"
        },

        {
            id: "13",
            description: "Banner Most Wanted",
            description2: "Quarta Versão",
            path: "docs/assets/no_sex_banner_up.png"
        },
        {
            id: "14",
            description: "Banner Xilindró",
            description2: "Primeira Versão",
            path: "docs/assets/xilindro_v1.png"
        },
        {
            id: "15",
            description: "Banner do Caixão",
            description2: "Primeira Versão",
            path: "docs/assets/mamou_v1.png"
        },
        {
            id: "16",
            description: "",
            description2: "",
            path: "docs/assets/novo_pi_01.png"
        },
        {
            id: "17",
            description: "Banner do Novo PI",
            description2: "Primeira Versão",
            path: "docs/assets/novo_pi_01.png"
        },
        {
            id: "18",
            description: "Amps V3",
            description2: "Terceira Versão",
            path: "docs/assets/amps_v3.png"
        },
    ]
      return {
        message,
        images
      }
    
    }
  }).mount('#app')