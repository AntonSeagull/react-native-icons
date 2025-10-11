

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiWhirlpoolShuriken = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M286.077 121.043l45.124-103.484-93.427 69.007-.392-.282-.062.616-105.5 77.925-83.85-76.773 35.532 112.459-.114.082.162.071 39.185 124.029-98.881 60.209 249.358-5.869L298.8 494.441l75.664-240.184 113.682 10.997zm-46.453 177.914c-32.097 0-58.115-26.019-58.115-58.114 0-32.098 26.018-58.115 58.115-58.115s58.114 26.017 58.114 58.115c0 32.096-26.017 58.114-58.114 58.114z" />
        </G>
      </Svg>
    );
  }

