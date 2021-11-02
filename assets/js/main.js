const app = new Vue({
    el: `#app`,
    data:{
        newTask:``,

        tasks:[
            `Completare l' esercizio`,
            `Iniziare i bonus`,
            `Esempio`
        ],

        compTasks: [

        ],
    },
    methods:{
        removeTask(i){
            this.tasks.splice(i, 1);
        },
        completeTask(i) {
            this.compTasks.push(this.tasks[i]);
            console.log(this.compTasks);
            this.tasks.splice(i, 1);
        },
        addTask(){
            if(this.newTask != "" && this.newTask.length > 5){
            this.tasks.push(this.newTask);
        }else{
            alert("Non puoi inserire una task vuota o con meno di 5 caratteri");
        }
        this.newTask = "";
        }
    }
})