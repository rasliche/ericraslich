var app = new Vue({
    el: '#pomodoro-app',
    data: {
        timeRemaining: 0,
        timers: {
            work: 1500,
            sbreak: 300,
            lbreak: 1500,
        },
        timer: null,
        mode: 'work', // can be 'work', 'sbreak', 'lbreak'
        running: false, // timer is ticking
        round: 0,
        roundTarget: 4,
        goal: 0,
        goalTarget: 12,
    },
    mounted() {
        this.timeRemaining = this.timers[this.mode]
    },
    methods: {
        runTimer() {
            this.timeRemaining = this.timers[this.mode]
            this.timer = setInterval(() => {
                if (this.timeRemaining <= 0) {
                    clearInterval(this.time)
                    console.log(`${this.mode} session ended.`)
                    return
                }
                this.timeRemaining--
            }, 1000)
            console.log(`${this.mode} session started.`)
        },
        pauseTimer() {

        }
    },
    computed: {
        minutesRemaining() {
            return Math.floor(this.timeRemaining / 60).toString().padStart(2, '0')
        },
        secondsRemaining() {
            return (this.timeRemaining % 60).toString().padStart(2, '0')
        },
    }
})