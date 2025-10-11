

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiRugFill = (props: IconProps) => {

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
          <Path  d="M200,16a8,8,0,0,0-8,8V40H160V24a8,8,0,0,0-16,0V40H112V24a8,8,0,0,0-16,0V40H64V24a8,8,0,0,0-16,0V232a8,8,0,0,0,16,0V216H96v16a8,8,0,0,0,16,0V216h32v16a8,8,0,0,0,16,0V216h32v16a8,8,0,0,0,16,0V24A8,8,0,0,0,200,16ZM155.43,130.06l-24,40a4,4,0,0,1-6.86,0l-24-40a4,4,0,0,1,0-4.12l24-40a4,4,0,0,1,6.86,0l24,40A4,4,0,0,1,155.43,130.06Z" />
        </G>
      </Svg>
    );
  }

