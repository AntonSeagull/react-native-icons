

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrUnsorted = (props: IconProps) => {

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
          <Path  d="M15.2044 15.3211L16.8012 13.7243L17.5083 14.4314L15.058 16.8817L14.7044 17.2353L14.3509 16.8817L11.9006 14.4314L12.6077 13.7243L14.2044 15.3211V7.21705H15.2044V15.3211ZM9.30385 8.91421V17.0182H10.3038V8.91421L11.9006 10.511L12.6077 9.80385L10.1574 7.35355L9.80385 7L9.45029 7.35355L6.99999 9.80385L7.7071 10.511L9.30385 8.91421Z" fillRule="evenodd" clipRule="evenodd" />
        </G>
      </Svg>
    );
  }

