import { Component } from '@angular/core';
import { DataService } from './data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true, // ✅ If using standalone component
  imports: [CommonModule] // ✅ Add this
})
export class MainComponent {
  allData: any[] = [];
  displayedData: any[] = [];
  loading = false;

  constructor(private dataService: DataService) {}

   loadData() {
    this.loading = true;
    this.dataService.getLargeData().subscribe(apiData => {
      if (typeof Worker !== 'undefined') {
        const worker = new Worker(new URL('./data-processor.worker', import.meta.url), {
          type: 'module',
        });

        worker.onmessage = ({ data }) => {
          this.allData = data;
          this.loading = false;
          this.displayInChunks();
        };

        worker.postMessage(apiData);
      } else {
        console.warn('Web Workers not supported.');
      }
    });
  }

   displayInChunks(chunkSize = 1000, delay = 25) {
    let i = 0;
    const appendChunk = () => {
      const nextChunk = this.allData.slice(i, i + chunkSize);
      this.displayedData = [...this.displayedData, ...nextChunk];
      i += chunkSize;
      if (i < this.allData.length) {
        setTimeout(appendChunk, delay);
      }
    };
    appendChunk();
  }
}
