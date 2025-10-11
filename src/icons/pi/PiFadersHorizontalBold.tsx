

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiFadersHorizontalBold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M176,80a12,12,0,0,1,12-12h28a12,12,0,0,1,0,24H188A12,12,0,0,1,176,80ZM40,92h96v12a12,12,0,0,0,24,0V56a12,12,0,0,0-24,0V68H40a12,12,0,0,0,0,24Zm176,72H124a12,12,0,0,0,0,24h92a12,12,0,0,0,0-24ZM84,140a12,12,0,0,0-12,12v12H40a12,12,0,0,0,0,24H72v12a12,12,0,0,0,24,0V152A12,12,0,0,0,84,140Z" />
        </G>
      </Svg>
    );
  }

