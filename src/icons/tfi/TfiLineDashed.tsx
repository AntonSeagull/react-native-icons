

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLineDashed = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M0 8h4v1h-4v-1zM6.5 9h4v-1h-4v1zM13 8v1h4v-1h-4z" fill="#000000" />
        </G>
      </Svg>
    );
  }

