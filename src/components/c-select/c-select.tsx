import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'c-select',
  styleUrl: 'c-select.scss',
  shadow: true,
})
export class CSelect {

  @Prop() options: string[] = ["React", "Vue", "Angular"];

  @State() value: string = '';
  @State() dropdownVisible: boolean = false;

  handleChange() {
    this.dropdownVisible = !this.dropdownVisible;
    console.log('handleChange', this.dropdownVisible);
  }

  selectChange(event: Event) {
    event.stopPropagation()
    const target = event.target as HTMLLabelElement;
    this.value = target.dataset.value as string;
    this.dropdownVisible = false;
    console.log('selectChange', this.dropdownVisible);
  }

  render() {
    return (
      <div class="custom-select" onClick={() => this.handleChange()}>
        <div class="selected-value">{this.value}</div>
        <div class={{ 'dropdown': true, 'show': this.dropdownVisible }}>
          {this.options.map(option => (
            <label class="option" data-value={option} onClick={(event) => this.selectChange(event)}>{option}</label>
          ))}
        </div>
      </div>
    );
  }
}
