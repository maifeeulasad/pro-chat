import { gLocaleObject } from '@/locale';
import { render } from '@testing-library/react';
import { ProChat } from '..';

describe('ProChat', () => {
  it('input area render worked', () => {
    const wrapper = render(
      <ProChat
        inputAreaRender={() => {
          return <div>inputAreaRender</div>;
        }}
      />,
    );
    expect(wrapper.getByText('inputAreaRender')).toBeInTheDocument();
  });

  it('i18n worked', () => {
    const app = render(<ProChat locale="en-US" />);
    const text = gLocaleObject('en-US');
    expect(app.queryByPlaceholderText(text.placeholder)).toBeInTheDocument();
  });
});
