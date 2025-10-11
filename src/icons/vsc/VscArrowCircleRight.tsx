

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscArrowCircleRight = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8, 8)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M8.08074 5.36891L10.2202 7.50833L4.46802 7.50833L4.46802 8.50833L10.1473 8.50833L8.08073 10.5749L8.78784 11.282L11.7444 8.32545L11.7444 7.61835L8.78784 4.6618L8.08074 5.36891Z" />
          <Path  d="M8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14ZM8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3C5.23858 3 3 5.23858 3 8C3 10.7614 5.23858 13 8 13Z" />
        </G>
      </Svg>
    );
  }

