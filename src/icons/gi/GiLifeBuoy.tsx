

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiLifeBuoy = (props: IconProps) => {

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
          <Path  d="M367.35 80.512a208 208 0 0 0-222.64.074l54.33 69.853a120 120 0 0 1 113.893.035l54.416-69.963zm64.064 64.197l-69.853 54.33a120 120 0 0 1-.035 113.893l69.963 54.416a208 208 0 0 0-.074-222.64zm-280.94 54.357L80.513 144.65a208 208 0 0 0 .074 222.64l69.853-54.33a120 120 0 0 1 .035-113.893zM312.962 361.56a120 120 0 0 1-113.893-.035l-54.416 69.963a208 208 0 0 0 222.64-.074l-54.33-69.853z" />
        </G>
      </Svg>
    );
  }

