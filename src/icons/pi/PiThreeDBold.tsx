

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiThreeDBold = (props: IconProps) => {

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
          <Path  d="M88,148a16,16,0,0,0-16-16,12,12,0,0,1-9.83-18.88L77,92H52a12,12,0,0,1,0-24h48a12,12,0,0,1,9.83,18.88l-18.34,26.2A40,40,0,1,1,43.43,176,12,12,0,1,1,60.57,159.2,16,16,0,0,0,88,148Zm76-80a60,60,0,0,1,0,120H140a12,12,0,0,1-12-12V80a12,12,0,0,1,12-12Zm0,24H152v72h12a36,36,0,0,0,0-72ZM32,56H224a12,12,0,0,0,0-24H32a12,12,0,0,0,0,24ZM224,200H32a12,12,0,0,0,0,24H224a12,12,0,0,0,0-24Z" />
        </G>
      </Svg>
    );
  }

