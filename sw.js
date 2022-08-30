self.addEventListener("push", (e) => {
    
    const config = {
        body : "Mesaj içeriği burada yer alacak",
        data : {
            dateOfArrival : Date.now(),
            primaryKey : "2"

        }
    }    
    e.waitUntil(self.ServiceWorkerRegistration.showNotification("Yeni bir makale eklendi", config));
});