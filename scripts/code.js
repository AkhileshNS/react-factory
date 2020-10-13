const Component = (name) => `
import React from 'react';
import Container from './${name}.styles';
// import Store from 'App/App.store';

export interface IProps {}

export const ${name}: React.FC<IProps> = (props) => {
  return (
    <Container>${name} component</Container>
  );
};

export default ${name};
`;

const Pages = (dirs) =>
  dirs.map((dir) => `import ${dir} from 'pages/${dir}/${dir}'`).join(';\n');

const Page = (name) => `
import React from 'react';
import Container from './${name}.styles';
// import Store from 'App/App.store';
import { RouteComponentProps } from '@reach/router';

export interface IProps extends RouteComponentProps {}

export const ${name}: React.FC<IProps> = (props) => {
  return (
    <Container>${name} page</Container>
  );
};

export default (props: RouteComponentProps) => {
  // const store = Store.useContainer();
  return (
    <${name} {...props} />
  );
};
`;

const Styles = () => `
import styled from '@emotion/styled';

export default styled.div\`
  width: 100%;
  height: 100%;
\`;
`;

const Test = (name) => `
import React from 'react';
import { ${name} } from './${name}';
import { shallow } from 'enzyme';

describe('<App />', () => {
  it('should render a div', () => {
    const wrapper = shallow(
      <${name} />
    );
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
`;

module.exports = {
  Component,
  Pages,
  Page,
  Test,
  Styles,
};
