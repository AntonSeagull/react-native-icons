

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPentagonFilled = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M10.205 2.6l-6.96 5.238a3 3 0 0 0 -1.045 3.338l2.896 8.765a3 3 0 0 0 2.85 2.059h8.12a3 3 0 0 0 2.841 -2.037l2.973 -8.764a3 3 0 0 0 -1.05 -3.37l-7.033 -5.237l-.091 -.061l-.018 -.01l-.106 -.07a3 3 0 0 0 -3.377 .148z" />
        </G>
      </Svg>
    );
  }

