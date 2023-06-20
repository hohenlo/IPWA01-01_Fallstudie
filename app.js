new Vue({
    el: '#app',
    data: {
      filter: '',
      rows: [],
    },
    computed: {
      filteredRows() {
        return this.rows.filter(row => 
          row.country.toLowerCase().includes(this.filter.toLowerCase()) || 
          row.company.toLowerCase().includes(this.filter.toLowerCase())
        );
      },
    },
    mounted() {
      fetch('data.json')
        .then(response => response.json())
        .then(data => {
          this.rows = data;
        });
    }
  });