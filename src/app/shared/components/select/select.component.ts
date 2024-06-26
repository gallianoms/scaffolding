import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Option = {
  name: string;
  avatar: string;
};

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass'],
})
export class SelectComponent {
  isOpen: boolean = false;
  selectedIdx: number = 0; // Index of the selected option
  selectedOption: string = 'Tom Cook'; // Default selected option
  options = [
    {
      name: 'Tom Cook',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Wade Cooper',
      avatar:
        'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Jane Doe',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
    },
    {
      name: 'John Doe',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Alice Smith',
      avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    },
    {
      name: 'Bob Johnson',
      avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
    },
    {
      name: 'Bob Johnson',
      avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
    },
    // Add more options as needed
  ];

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: Option, index: number) {
    this.selectedOption = option.name;
    this.selectedIdx = index;
    this.isOpen = false; // Close the dropdown after selecting an option
  }

  highlightOption(index: number) {
    this.selectedIdx = index;
  }
}
