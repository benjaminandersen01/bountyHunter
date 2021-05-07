import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-bounty-detail',
  templateUrl: './bounty-detail.page.html',
  styleUrls: ['./bounty-detail.page.scss'],
})
export class BountyDetailPage implements OnInit {
  public bountyId: number;
  public bountyDetails: any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.findDetails();
  }
  findDetails(){
    this.bountyId = +this.route.snapshot.paramMap.get('id');

    const bounties = JSON.parse(localStorage.getItem('bounties'));

    this.bountyDetails = bounties.find(bounty => bounty.id === this.bountyId);
  }
  startHunt(){
    this.router.navigateByUrl('/bounty-active')
  }
}
