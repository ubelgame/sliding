const app = Vue.createApp({
    data(){
        return {
            name : 'test',
            slidingImages :[
                    {src : 'Saved Pictures/adrian-wilkins-frenzy-by-adrian-wilkins.jpg'},
                    {src : 'Saved Pictures\\ami-thompson-asset.jpg'},
                    {src : 'Saved Pictures\\ami-thompson-d86jvuivuaayhpf.jpg'},
                    {src : 'Saved Pictures\\insist-qq-20210822223535.jpg'},
                    {src : 'Saved Pictures\\kan-liu-666k-001 (1).jpg'},
                    {src : 'Saved Pictures\\kan-liu-666k-001.jpg'},
                    {src : 'Saved Pictures\\kan-liu-666k-2 (6).jpg'},
                    {src : 'Saved Pictures\\lei-min-lei-min-b.jpg'},
                    {src : 'Saved Pictures\\lei-min-shuihua2.jpg'},
                    {src : 'Saved Pictures\\lei-min-www.jpg'},
                    {src : 'Saved Pictures\\sasa-melody-021.jpg'},
                    {src : 'Saved Pictures\\song-nan-li-riven-and-zed.jpg'},
                    {src : 'Saved Pictures\\suke-dan62000.jpg'},
                    {src : 'Saved Pictures\\tb-choi-egregeg.jpg'},
                    {src : 'Saved Pictures\\tb-choi-personal-work2.jpg'}
            ],
            isActive : false
        };
    },
    methods :{
        effectsControl(){
            // alert('shut up')
         this.isActive = !this.isActive
        }
    }
})

app.mount("#imgholder");