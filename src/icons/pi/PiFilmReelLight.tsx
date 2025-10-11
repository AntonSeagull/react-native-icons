

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiFilmReelLight = (props: IconProps) => {

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
          <Path  d="M232,218H176a102,102,0,1,0-48,12H232a6,6,0,0,0,0-12ZM38,128a90,90,0,1,1,90,90A90.1,90.1,0,0,1,38,128Zm90-26a22,22,0,1,0-22-22A22,22,0,0,0,128,102Zm0-32a10,10,0,1,1-10,10A10,10,0,0,1,128,70Zm22,106a22,22,0,1,0-22,22A22,22,0,0,0,150,176Zm-32,0a10,10,0,1,1,10,10A10,10,0,0,1,118,176Zm58-26a22,22,0,1,0-22-22A22,22,0,0,0,176,150Zm0-32a10,10,0,1,1-10,10A10,10,0,0,1,176,118ZM80,106a22,22,0,1,0,22,22A22,22,0,0,0,80,106Zm0,32a10,10,0,1,1,10-10A10,10,0,0,1,80,138Z" />
        </G>
      </Svg>
    );
  }

