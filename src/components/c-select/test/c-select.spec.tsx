import { newSpecPage } from '@stencil/core/testing';
import { CSelect } from '../c-select';

describe('c-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CSelect],
      html: `<c-select></c-select>`,
    });
    expect(page.root).toEqualHtml(`
      <c-select>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </c-select>
    `);
  });
});
