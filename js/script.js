var app = new Vue({
  el: '#app',
  data: {
    list: [
      "Bere una birra",
      "Fare la spesa",
      "Studiare",
      "Giocare a cyberpunk 2077"
    ]
  },
  methods: {
    addListTask: function() {
      var taskInput = document.getElementById("inputHTML").value;
      
      if (taskInput == "") {
        alert("Il campo è vuoto!")
      } else {
        this.list.push(taskInput);
        document.getElementById("inputHTML").value = "";
      }
    },
    removeListTask: function(index) {
      this.$delete(this.list, index);
    }
  }
})
