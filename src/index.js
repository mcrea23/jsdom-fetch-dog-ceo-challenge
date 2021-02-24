
console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', function(){


    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    const allLis = document.getElementsByTagName("li")
    const ddl = document.getElementById("breed-dropdown")



    function fetchImage(){
        return fetch(imgUrl)
        .then(resp => resp.json())
        // .then(json => console.log(json))

        .then(json => addImagesToMain(json));
    }
    function fetchBreed(){
        return fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => addBreedsToList(json))
    }
    
    function fetchBreedAlphateically(){
        return fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => addAlphabeticallyToList(json))
    }



    function changeColor(){
        console.log(this)
        this.style.color = "yellow"
    }



    function addBreedsToList(breeds){
        const breedsList = document.getElementById("dog-breeds")
        
        for(let breed in breeds.message){
            const li = document.createElement('li')
            li.className = "breed-list-item"
            li.addEventListener("click", changeColor)
            li.innerText = breed
            breedsList.appendChild(li)
        }
    }

    function addAlphabeticallyToList(breeds){
        document.querySelector("ul").innerHTML = ''
        const breedsList = document.getElementById("dog-breeds")
        const letter = document.getElementById("breed-dropdown").value
        for (let breed in breeds.message){
            if (breed.charAt(0) == letter){
                const li = document.createElement("li")
                li.innerText = breed
                document.getElementById("dog-breeds").appendChild(li)

            }
        }
    }

    function addImagesToMain(images){
        const dogContainer = document.getElementById("dog-image-container")
        images.message.forEach(function(url){
            const img = document.createElement("img")
            img.src = url
            img.width = "100"
            dogContainer.appendChild(img)
        })
    }
    ddl.addEventListener('change', function(){
        fetchBreedAlphateically()
        // const breedsByLetter = fetchBreedAlphateically()

        
    })




        
        fetchImage()
        fetchBreed()
        

})