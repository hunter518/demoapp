var reg = document.getElementById('register')
            console.log(reg)
            function cloSe(){
                console.log('clicked');
                reg.style.display = "none";
            }

            function form(){
                console.log('og')
                reg.style.display = "block";
            }
            
            var profile_photo = document.getElementById('profile-photo') 
            var profile = document.getElementById('profile')
            profile_photo.addEventListener('change', function(){
                const choosedfile=this.files[0]
                if(choosedfile){
                    const reader = new FileReader();
                    reader.addEventListener('load', function(){
                        profile.setAttribute('src', reader.result)
                    })
                    reader.readAsDataURL(choosedfile)
                }
         })