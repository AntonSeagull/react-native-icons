

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiVerticalBottom = (props: IconProps) => {

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
          <Path d="M18 19h3v2h-3zM13 19h3v2h-3zM8 19h3v2H8zM3 19h3v2H3zM13 5h-2v8H8l4 4 4-4h-3V5z" />
        </G>
      </Svg>
    );
  }

