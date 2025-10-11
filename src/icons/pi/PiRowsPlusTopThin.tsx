

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiRowsPlusTopThin = (props: IconProps) => {

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
          <Path  d="M208,164H48a12,12,0,0,0-12,12v24a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V176A12,12,0,0,0,208,164Zm4,36a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V176a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4ZM208,92H48a12,12,0,0,0-12,12v24a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V104A12,12,0,0,0,208,92Zm4,36a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V104a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4ZM100,40a4,4,0,0,1,4-4h20V16a4,4,0,0,1,8,0V36h20a4,4,0,0,1,0,8H132V64a4,4,0,0,1-8,0V44H104A4,4,0,0,1,100,40Z" />
        </G>
      </Svg>
    );
  }

