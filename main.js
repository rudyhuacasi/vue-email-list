`use strict`

// aggiungo un data
const { createApp } = Vue

  createApp({
    data() {
      return {
        title: `Prova Titolo`,
        email: [],
        // url del api
        url: `https://flynn.boolean.careers/exercises/api/random/mail`
      };
    },
    created(){
      // ciclo di email
      for (let i = 0; i < 10; i++) {
        axios.get(this.url).then((response) => {
            this.email.push(response.data.response)
            console.log(response.data.response);
        })
        
      }
        
    },
  }).mount('#app')