

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RxBorderTop = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 15 15"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M14 1.75L1 1.75L1 0.249999L14 0.25L14 1.75Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

