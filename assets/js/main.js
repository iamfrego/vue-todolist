const app = new Vue({
    el: `#app`,
    data: {
        newTask: ``,

        tasks: [
            `Completare l' esercizio`,
            `Iniziare i bonus`,
            `Esempio`
        ],

        compTasks: [

        ],

        delTasks: [

        ],
    },
    methods: {
        removeTask(i) {
            this.delTasks.push(this.tasks[i]);
            this.tasks.splice(i, 1);
        },

        completeTask(i) {
            this.compTasks.push(this.tasks[i]);
            this.tasks.splice(i, 1);
        },

        addTask() {
            if (this.newTask != "" && this.newTask.length > 5) {
                this.tasks.push(this.newTask);
            } else {
                alert("Non puoi inserire una task vuota o con meno di 5 caratteri");
            }
            this.newTask = "";
        },

        redoTask(i) {
            this.tasks.push(this.compTasks[i]);
            this.compTasks.splice(i, 1);
        },

        restoreTask(i) {
            this.tasks.push(this.delTasks[i]);
            this.delTasks.splice(i, 1);
        },

        cleanTrash() {
            const choose = prompt("Please confirm: Y/N")
            if (choose === "Y" || choose === "y") {
                this.delTasks = []
            }
        }

    }
})