

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imkernews = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M0 0v16h16v-16h-16zM8.5 9.125v3.375h-1v-3.375l-2.734-5.125h1.134l2.1 3.938 2.1-3.938h1.134l-2.734 5.125z" fill="#000000" />
        </G>
      </Svg>
    );
  }

