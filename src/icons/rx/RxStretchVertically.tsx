

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RxStretchVertically = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 15 15"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 7.5, 7.5)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M0.999878 0.5C0.999878 0.223858 1.22374 0 1.49988 0H13.4999C13.776 0 13.9999 0.223858 13.9999 0.5C13.9999 0.776142 13.776 1 13.4999 1H6H1.49988C1.22374 1 0.999878 0.776142 0.999878 0.5ZM9 14V1L6 1V14H1.49988C1.22374 14 0.999878 14.2239 0.999878 14.5C0.999878 14.7761 1.22374 15 1.49988 15H13.4999C13.776 15 13.9999 14.7761 13.9999 14.5C13.9999 14.2239 13.776 14 13.4999 14H9Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
        </G>
      </Svg>
    );
  }

