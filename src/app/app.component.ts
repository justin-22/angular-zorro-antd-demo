import { Component } from '@angular/core';
import { isAfter } from 'date-fns';
// interface DataItem {
//   name: string;
//   age: number;
//   address: string;
// }
interface DataItem {
  id?: string;
  vouch?: string;
  year?: string;
  vouchdate?: Date;
  vouchno?: string;
  receiver?: string;
  money?: number;
  description?: string;
}

@Component({
  selector: 'nz-demo-table-custom-filter-panel',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class NzDemoTableCustomFilterPanelComponent {
  searchValue = '';
  visible = false;
  listOfData: DataItem[] = [
    {
      vouchdate: new Date('2022-01-05'),
      vouchno: '2015555331',
      receiver: 'New York No. 1 Lake Park',
      description: 'New York No. 1 Lake Park',
    },
    {
      vouchdate: new Date('2022-01-07'),
      vouchno: '2015555334',
      receiver: 'New York No. 1 Lake Park',
      description: 'New York No. 1 Lake Park',
    },
    {
      vouchdate: new Date('2022-01-20'),
      vouchno: '2015555333',
      receiver: 'New York No. 1 Lake Park',
      description: 'New York No. 1 Lake Park',
    },
    {
      vouchdate: new Date('2022-01-12'),
      vouchno: '2015555332',
      receiver: 'New York No. 1 Lake Park',
      description: 'New York No. 1 Lake Park',
    },
    {
      vouchdate: new Date('2022-01-12'),
      vouchno: '2015555332',
      receiver: 'New York No. 1 Lake Park',
      description: 'New York No. 1 Lake Park',
    },
    {
      vouchdate: new Date('2022-01-12'),
      vouchno: '2015555332',
      receiver: 'New York No. 1 Lake Park',
      description: 'New York No. 1 Lake Park',
    },
    {
      vouchdate: new Date('2022-01-12'),
      vouchno: '2015555332',
      receiver: 'New York No. 1 Lake Park',
      description: 'New York No. 1 Lake Park',
    },
    {
      vouchdate: new Date('2022-01-12'),
      vouchno: '2015555332',
      receiver: 'New York No. 1 Lake Park',
      description: 'New York No. 1 Lake Park',
    },
    {
      vouchdate: new Date('2022-01-12'),
      vouchno: '2015555332',
      receiver: 'New York No. 1 Lake Park',
      description: 'New York No. 1 Lake Park',
    },
    {
      vouchdate: new Date('2022-01-12'),
      vouchno: '2015555332',
      receiver: 'New York No. 1 Lake Park',
      description: 'New York No. 1 Lake Park',
    },
    {
      vouchdate: new Date('2022-01-12'),
      vouchno: '2015555332',
      receiver: 'New York No. 1 Lake Park',
      description: 'New York No. 1 Lake Park',
    },
  ];
  listOfDisplayData = [...this.listOfData];

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter(
      (item: DataItem) => item.vouchno.indexOf(this.searchValue) !== -1
    );
  }

  sortVouchNo = (a: DataItem, b: DataItem) =>
    a.vouchno.localeCompare(b.vouchno);
  sortVouchDate = (a: DataItem, b: DataItem) =>
    isAfter(a.vouchdate, b.vouchdate);
}
