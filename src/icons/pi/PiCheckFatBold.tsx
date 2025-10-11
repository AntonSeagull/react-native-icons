

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCheckFatBold = (props: IconProps) => {

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
          <Path d="M246.15,65.46l-.07-.08L222.15,41.85a20,20,0,0,0-28.23-.05l-90,88.83L70.06,97.78a20,20,0,0,0-28.21.08l-24,24a20,20,0,0,0,0,28.26l71.62,72a20,20,0,0,0,28.29,0L246.15,93.74A20,20,0,0,0,246.15,65.46ZM103.61,202.33,37.64,136,56,117.61,95.65,156a12,12,0,0,0,16.78-.08L208,61.61l18.32,18Z" />
        </G>
      </Svg>
    );
  }

