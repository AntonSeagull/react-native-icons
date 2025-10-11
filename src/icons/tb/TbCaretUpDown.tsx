

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCaretUpDown = (props: IconProps) => {

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
          <Path d="M18 10l-6 -6l-6 6h12" />
          <Path d="M18 14l-6 6l-6 -6h12" />
        </G>
      </Svg>
    );
  }

