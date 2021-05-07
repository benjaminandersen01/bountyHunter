import { Component, OnInit } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-bounty-board',
  templateUrl: './bounty-board.page.html',
  styleUrls: ['./bounty-board.page.scss'],
})
export class BountyBoardPage implements OnInit {

  public bounties: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchBounties();
  }
  fetchBounties(){
    this.http.get("https://muspring2021-bit440.github.io/bounty-hunter-api/api/v1/current_bounties.json").subscribe((bounties: any) => {
      console.log('We haz bounties', bounties);
    
    this.bounties = bounties.current_bounties

      
    localStorage.setItem('bounties', JSON.stringify(this.bounties));
    })
  }

}
