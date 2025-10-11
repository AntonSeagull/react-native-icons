

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPolaroid = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
          <Path d="M4 16l16 0" />
          <Path d="M4 12l3 -3c.928 -.893 2.072 -.893 3 0l4 4" />
          <Path d="M13 12l2 -2c.928 -.893 2.072 -.893 3 0l2 2" />
          <Path d="M14 7l.01 0" />
        </G>
      </Svg>
    );
  }

