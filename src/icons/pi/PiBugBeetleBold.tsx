

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiBugBeetleBold = (props: IconProps) => {

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
          <Path  d="M224,160a12,12,0,0,0,0-24H212V120h12a12,12,0,0,0,0-24H210.45a83.7,83.7,0,0,0-18.78-38.7l16.82-16.81a12,12,0,1,0-17-17l-18,18a83.7,83.7,0,0,0-91.1,0l-18-18a12,12,0,0,0-17,17L64.33,57.3A83.7,83.7,0,0,0,45.55,96H32a12,12,0,0,0,0,24H44v16H32a12,12,0,0,0,0,24H44a83.55,83.55,0,0,0,1.55,16H32a12,12,0,0,0,0,24H54.15a84,84,0,0,0,147.7,0H224a12,12,0,0,0,0-24H210.45A83.55,83.55,0,0,0,212,160ZM128,52a60.1,60.1,0,0,1,57.82,44H70.18A60.1,60.1,0,0,1,128,52Zm12,166.79V148a12,12,0,0,0-24,0v70.79A60.09,60.09,0,0,1,68,160V120H188v40A60.09,60.09,0,0,1,140,218.79Z" />
        </G>
      </Svg>
    );
  }

