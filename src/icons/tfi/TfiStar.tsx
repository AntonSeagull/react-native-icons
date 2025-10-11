

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiStar = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8.5, 8.5)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M16.647 7.017h-6.225l-1.922-5.92-1.923 5.92h-6.224l5.035 3.658-1.922 5.92 5.034-3.659 5.035 3.659-1.922-5.92 5.034-3.658zM11.633 13.977l-3.133-2.278-3.133 2.277 1.197-3.685-3.133-2.274h3.873l1.196-3.684 1.196 3.684h3.873l-3.133 2.275 1.197 3.685z" />
        </G>
      </Svg>
    );
  }

