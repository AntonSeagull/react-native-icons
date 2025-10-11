

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiBrex = (props: IconProps) => {

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
          <Path  d="M18.69 2.319a3.868 3.868 0 0 0-3.108 1.547l-.759 1.007a1.658 1.658 0 0 1-1.313.656H0V21.68h5.296a3.87 3.87 0 0 0 3.108-1.547l.759-1.006a1.656 1.656 0 0 1 1.313-.657H24V2.319h-5.31Zm1.108 11.949h-5.66a3.87 3.87 0 0 0-3.108 1.547l-.759 1.007a1.658 1.658 0 0 1-1.313.656H4.202V9.731h5.661a3.868 3.868 0 0 0 3.107-1.547l.759-1.006a1.658 1.658 0 0 1 1.313-.657h4.771l-.015 7.747Z" />
        </G>
      </Svg>
    );
  }

