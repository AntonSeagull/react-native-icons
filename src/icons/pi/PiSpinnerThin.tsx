

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiSpinnerThin = (props: IconProps) => {

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
          <Path  d="M132,32V64a4,4,0,0,1-8,0V32a4,4,0,0,1,8,0Zm41.25,54.75a4,4,0,0,0,2.83-1.18L198.71,63a4,4,0,0,0-5.66-5.66L170.43,79.92a4,4,0,0,0,2.82,6.83ZM224,124H192a4,4,0,0,0,0,8h32a4,4,0,0,0,0-8Zm-47.92,46.43a4,4,0,1,0-5.65,5.65l22.62,22.63a4,4,0,0,0,5.66-5.66ZM128,188a4,4,0,0,0-4,4v32a4,4,0,0,0,8,0V192A4,4,0,0,0,128,188ZM79.92,170.43,57.29,193.05A4,4,0,0,0,63,198.71l22.62-22.63a4,4,0,1,0-5.65-5.65ZM68,128a4,4,0,0,0-4-4H32a4,4,0,0,0,0,8H64A4,4,0,0,0,68,128ZM63,57.29A4,4,0,0,0,57.29,63L79.92,85.57a4,4,0,1,0,5.65-5.65Z" />
        </G>
      </Svg>
    );
  }

