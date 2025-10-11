

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTrophyThin = (props: IconProps) => {

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
          <Path  d="M232,68H204V48a4,4,0,0,0-4-4H56a4,4,0,0,0-4,4V68H24A12,12,0,0,0,12,80V96a36,36,0,0,0,36,36h6.66A76,76,0,0,0,124,187.89V220H96a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8H132V187.88c32.93-1.74,60.41-24.91,69.11-55.88H208a36,36,0,0,0,36-36V80A12,12,0,0,0,232,68ZM48,124A28,28,0,0,1,20,96V80a4,4,0,0,1,4-4H52v36a77,77,0,0,0,1,12Zm148-12.9c0,37.71-30.79,68.62-68,68.9a68,68,0,0,1-68-68V52H196ZM236,96a28,28,0,0,1-28,28h-5.1a77.35,77.35,0,0,0,1.1-12.9V76h28a4,4,0,0,1,4,4Z" />
        </G>
      </Svg>
    );
  }

