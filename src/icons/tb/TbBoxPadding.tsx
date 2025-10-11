

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBoxPadding = (props: IconProps) => {

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
          <Path d="M8 16v.01" />
          <Path d="M8 12v.01" />
          <Path d="M8 8v.01" />
          <Path d="M16 16v.01" />
          <Path d="M16 12v.01" />
          <Path d="M16 8v.01" />
          <Path d="M12 8v.01" />
          <Path d="M12 16v.01" />
        </G>
      </Svg>
    );
  }

