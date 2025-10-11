

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiGreaterThanBold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M228,128a12,12,0,0,1-6.86,10.84l-152,72a12,12,0,0,1-10.27-21.69L188,128,58.87,66.85A12,12,0,0,1,69.14,45.16l152,72A12,12,0,0,1,228,128Z" />
        </G>
      </Svg>
    );
  }

