import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Plugins} from '@capacitor/core';
import {Router} from '@angular/router';
import {Loader} from "@googlemaps/js-api-loader";
import {api_key} from './google_maps_api_key'
// object destructuring
const { Geolocation } = Plugins;
//const geolocation = Plugins.Geolocation;

declare var google

@Component({
  selector: 'app-bounty-active',
  templateUrl: './bounty-active.page.html',
  styleUrls: ['./bounty-active.page.scss'],
})
export class BountyActivePage implements OnInit {
  //this is Essentially angulars version of document.getElementbyID
  @ViewChild('mapCanvas', {static: true}) mapElement: ElementRef;
  
  public map: any;

  public userLocation: any;

  //TODO this should be coming dynamically from the chosen bounty
  public bountyLocation: any ={
    latitude:41.45215045406987,
    longitude:-96.48410642678357 
  }
  private watcherID: string;
  private userRawPosition: any = {
    coords: {}
  }
  private userMarker: any;
  private bountyCircle: any;
  private userLocationObject: any;

  constructor(private router: Router) { }

  ngOnInit() {
    const loader = new Loader({
      apiKey: api_key,
      version: "weekly",
      libraries: ['geometry'],
    });

    loader.load().then( () => {
      this.loadMap()
      //returns a promise
    }).then ( () => {
      //then returns another promise
      this.watchLocation();
    
    })
  }
  
  
  loadMap(){
      return Geolocation.getCurrentPosition().then( position =>{
        console.log("Position: ", position);
        //users current position
        this.userLocationObject = new google.maps.LatLng(position.coords.latitude, position.coords.longitude)

        const mapOptions ={
          zoom: 12,
          center: this.userLocationObject,
        }

        this.map = new google.maps.Map(
          this.mapElement.nativeElement, 
          mapOptions
          )
       
          return Promise.resolve()
        })
  }
    watchLocation() {
    console.log("Watching Location")
    
    const positionOptions = {
      maximumAge: 0,
      enableHighAccuracy: false
    } 

    this.watcherID = Geolocation.watchPosition(positionOptions, (position) => {
      
      console.log('Got Watched Position', position);
      
      if(
        !position ||
        // || = or
        !position.coords ||
        //=== same value and same type
        this.userRawPosition.coords.latitude === position.coords.latitude &&
        this.userRawPosition.coords.longitude === position.coords.longitude
      ) {
        console.log('Same location, skipping rest of funcation', this.userRawPosition, position)
        return false;
      }

      //save for the next time this runs
      this.userRawPosition = position;

      console.log("Position: ", position);

      this.updateUserLocation();
      this.updateBountyCircle();
    })
  }
    updateUserLocation() {
      //the user current position
      this.userLocationObject = new google.maps.LatLng(
        this.userRawPosition.coords.latitude,
        this.userRawPosition.coords.longitude
      )

      //this marker is the users current position
      if(this.userMarker) this.userMarker.setMap(null);
      this.userMarker = new google.maps.Marker({
        map: this.map,
        position: this.userLocationObject,
        animation: google.maps.Animation.DROP
      })
    }
    updateBountyCircle(){
      const bountyLocationObject = new google.maps.LatLng(this.bountyLocation.latitude, this.bountyLocation.longitude)
    
      const distanceToBounty = Math.round(
        google.maps.geometry.spherical.computeDistanceBetween(this.userLocationObject, bountyLocationObject)
      )
  
        let radius
        //calculate size of the radius
        if (distanceToBounty> 1000) {
          radius = 500
        }else if (distanceToBounty <= 1000 && distanceToBounty > 500){
          radius = 300
        } else if (distanceToBounty <= 500 && distanceToBounty > 100){
          radius = 100
        } else {
          radius = 25
        }
    if(this.bountyCircle) this.bountyCircle.setMap(null);

    this.bountyCircle = new google.maps.Circle({
          strokeColor: "#FF0000",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#FF0000",
          fillOpacity: 0.35,
          map: this.map,
          center: bountyLocationObject,
          radius
        });
  }
  goToBountyClaim(){
        this.router.navigateByUrl('/bounty-claim');
  }
}
