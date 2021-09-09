// configurazione vue
Vue.config.devtools = true;

const app = new Vue({
  el: "#root",
  data: {
    newToDo: "",
    toDoS: [
      {
        title: "Fix the bathroom",
        done: false,
      },
      {
        title: "Do Homework",
        done: true,
      },
      {
        title: "Do the laundry",
        done: true,
      },
      {
        title: "Exercising",
        done: false,
      },
      {
        title: "Programming exercise",
        done: false,
      },
    ],
  },
  methods: {
    addToDo() {
      if (this.newToDo != "") {
        this.toDoS.push({ title: this.newToDo, done: false });
        this.newToDo = "";
      }
    },
    removeToDo(index) {
      this.toDoS.splice(index, 1);
      console.log(this.toDoS);
    },
    toggleVisibility(index) {
      this.toDoS[index].done = !this.toDoS[index].done;
    },
  },
});
